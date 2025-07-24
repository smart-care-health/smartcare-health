import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { RunwareService } from "@/services/runware";
import { toast } from "sonner";

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageGenerator = ({ onImageGenerated }: ImageGeneratorProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHeroImage = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    
    try {
      const runware = new RunwareService(apiKey);
      
      const prompt = `A warm, hopeful scene of an African healthcare worker (nurse or community health worker) using a digital tablet or diagnostic device while caring for a patient in a semi-urban African setting. The healthcare worker should be professionally dressed, showing compassion and expertise. The patient could be a child, pregnant woman, or elderly person, creating a sense of trust and care. The background should subtly include elements like a local clinic, solar panel, or telecommunications mast suggesting digital infrastructure and connectivity. Natural lighting with soft background blur, conveying hope, innovation, and human-centered healthcare transformation. Professional photography style, suitable for a healthcare technology company website hero banner. Ultra high resolution, 16:10 aspect ratio.`;

      const result = await runware.generateImage({
        positivePrompt: prompt,
        model: "runware:100@1",
        outputFormat: "WEBP",
        numberResults: 1
      });

      if (result.imageURL) {
        // Download the image and save it to assets
        const response = await fetch(result.imageURL);
        const blob = await response.blob();
        
        // Create a data URL for the image
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result as string;
          onImageGenerated(result.imageURL);
          toast.success("Hero image generated successfully!");
        };
        reader.readAsDataURL(blob);
      }
    } catch (error) {
      console.error("Image generation failed:", error);
      toast.error("Failed to generate image. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Generate Hero Image</CardTitle>
        <CardDescription>
          Enter your Runware API key to generate a custom hero image. Get your API key from{" "}
          <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            runware.ai
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="apiKey">Runware API Key</Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Enter your API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        <Button 
          onClick={generateHeroImage} 
          disabled={isGenerating || !apiKey.trim()}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Image...
            </>
          ) : (
            "Generate Hero Image"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ImageGenerator;