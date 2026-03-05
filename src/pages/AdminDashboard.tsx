import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Navigate } from 'react-router-dom';
import { Users, Mail, MessageSquare, TrendingUp, LogOut, Eye, MessageCircle } from 'lucide-react';

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  organization: string | null;
  inquiry_type: string;
  message: string;
  status: string;
  responded_at: string | null;
  response_notes: string | null;
  created_at: string;
}

interface NewsletterSubscriber {
  id: string;
  email: string;
  status: string;
  source: string;
  subscribed_at: string;
  unsubscribed_at: string | null;
}

const AdminDashboard = () => {
  const { user, profile, loading, isAdmin, signOut } = useAuth();
  const { toast } = useToast();
  
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [responseNotes, setResponseNotes] = useState('');
  const [isRespondDialogOpen, setIsRespondDialogOpen] = useState(false);

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const fetchData = async () => {
    try {
      setLoadingData(true);
      
      // Fetch contact submissions
      const { data: contactData, error: contactError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactError) throw contactError;
      setContacts(contactData || []);

      // Fetch newsletter subscribers
      const { data: subscriberData, error: subscriberError } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (subscriberError) throw subscriberError;
      setSubscribers(subscriberData || []);
      
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoadingData(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateContactStatus = async (id: string, status: string, notes?: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ 
          status,
          responded_at: status === 'responded' ? new Date().toISOString() : null,
          responded_by: status === 'responded' ? user?.id : null,
          response_notes: notes || null
        })
        .eq('id', id);

      if (error) throw error;
      
      await fetchData();
      toast({
        title: "Status updated",
        description: `Contact submission marked as ${status}`,
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleRespondClick = (contact: ContactSubmission) => {
    setSelectedContact(contact);
    setResponseNotes(contact.response_notes || '');
    setIsRespondDialogOpen(true);
  };

  const handleRespondSubmit = async () => {
    if (!selectedContact) return;
    
    await updateContactStatus(selectedContact.id, 'responded', responseNotes);
    setIsRespondDialogOpen(false);
    setSelectedContact(null);
    setResponseNotes('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  const stats = {
    totalContacts: contacts.length,
    pendingContacts: contacts.filter(c => c.status === 'new').length,
    totalSubscribers: subscribers.filter(s => s.status === 'active').length,
    recentContacts: contacts.filter(c => {
      const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      return new Date(c.created_at) > dayAgo;
    }).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {profile?.first_name || profile?.email}
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalContacts}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Responses</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingContacts}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSubscribers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent (24h)</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.recentContacts}</div>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <Tabs defaultValue="contacts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            <TabsTrigger value="subscribers">Newsletter Subscribers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                {loadingData ? (
                  <div className="text-center py-8">Loading...</div>
                ) : (
                  <div className="min-w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[120px]">Name</TableHead>
                          <TableHead className="min-w-[180px]">Email</TableHead>
                          <TableHead className="min-w-[120px]">Type</TableHead>
                          <TableHead className="min-w-[100px]">Status</TableHead>
                          <TableHead className="min-w-[100px]">Date</TableHead>
                          <TableHead className="min-w-[140px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell className="font-medium">
                              {contact.first_name} {contact.last_name}
                              {contact.organization && (
                                <div className="text-xs text-muted-foreground">
                                  {contact.organization}
                                </div>
                              )}
                            </TableCell>
                            <TableCell>
                              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                                {contact.email}
                              </a>
                            </TableCell>
                            <TableCell className="capitalize">
                              {contact.inquiry_type.replace('_', ' ')}
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={contact.status === 'new' ? 'destructive' : 'default'}
                              >
                                {contact.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="text-xs">
                                {new Date(contact.created_at).toLocaleDateString()}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(contact.created_at).toLocaleTimeString()}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col sm:flex-row gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline">
                                      <Eye className="h-3 w-3 mr-1" />
                                      View
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle>Contact Details</DialogTitle>
                                      <DialogDescription>
                                        Full details for {contact.first_name} {contact.last_name}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="text-sm font-medium">Name</Label>
                                          <p className="text-sm">{contact.first_name} {contact.last_name}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm font-medium">Email</Label>
                                          <p className="text-sm">{contact.email}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm font-medium">Organization</Label>
                                          <p className="text-sm">{contact.organization || 'Not provided'}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm font-medium">Inquiry Type</Label>
                                          <p className="text-sm capitalize">{contact.inquiry_type.replace('_', ' ')}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium">Message</Label>
                                        <div className="mt-1 p-3 bg-muted rounded-md">
                                          <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
                                        </div>
                                      </div>
                                      {contact.response_notes && (
                                        <div>
                                          <Label className="text-sm font-medium">Response Notes</Label>
                                          <div className="mt-1 p-3 bg-primary/5 rounded-md">
                                            <p className="text-sm whitespace-pre-wrap">{contact.response_notes}</p>
                                          </div>
                                        </div>
                                      )}
                                      <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Submitted: {new Date(contact.created_at).toLocaleString()}</span>
                                        {contact.responded_at && (
                                          <span>Responded: {new Date(contact.responded_at).toLocaleString()}</span>
                                        )}
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                
                                {contact.status === 'new' && (
                                  <Button
                                    size="sm"
                                    onClick={() => handleRespondClick(contact)}
                                  >
                                    <MessageCircle className="h-3 w-3 mr-1" />
                                    Respond
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="subscribers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Subscribers</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                {loadingData ? (
                  <div className="text-center py-8">Loading...</div>
                ) : (
                  <div className="min-w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[200px]">Email</TableHead>
                          <TableHead className="min-w-[100px]">Status</TableHead>
                          <TableHead className="min-w-[100px]">Source</TableHead>
                          <TableHead className="min-w-[120px]">Subscribed Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subscribers.map((subscriber) => (
                          <TableRow key={subscriber.id}>
                            <TableCell>
                              <a href={`mailto:${subscriber.email}`} className="text-primary hover:underline">
                                {subscriber.email}
                              </a>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={subscriber.status === 'active' ? 'default' : 'secondary'}
                              >
                                {subscriber.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="capitalize">{subscriber.source}</TableCell>
                            <TableCell>
                              <div className="text-xs">
                                {new Date(subscriber.subscribed_at).toLocaleDateString()}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(subscriber.subscribed_at).toLocaleTimeString()}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Response Dialog */}
        <Dialog open={isRespondDialogOpen} onOpenChange={setIsRespondDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Mark as Responded</DialogTitle>
              <DialogDescription>
                Add response notes for {selectedContact?.first_name} {selectedContact?.last_name}
              </DialogDescription>
            </DialogHeader>
            
            {selectedContact && (
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Original Message:</h4>
                  <p className="text-sm whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="response-notes">Response Notes (Optional)</Label>
                  <Textarea
                    id="response-notes"
                    value={responseNotes}
                    onChange={(e) => setResponseNotes(e.target.value)}
                    placeholder="Add any notes about your response, follow-up actions, or resolution..."
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    These notes are for internal tracking and will help you remember what actions were taken.
                  </p>
                </div>
              </div>
            )}
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsRespondDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleRespondSubmit}>
                Mark as Responded
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminDashboard;