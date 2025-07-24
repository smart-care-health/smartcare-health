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
      
      const positivePrompt = `A scene capturing the transformation of primary healthcare in Africa through digital connectivity. An African healthcare worker (nurse or community health worker) in professional medical attire is shown in a rural or semi-urban setting, providing care to patients in an underserved area. The scene conveys that healthcare is being extended to remote communities through technology-enabled, connected care. Hands positioned naturally at sides or holding simple medical equipment. Background elements include a local clinic with subtle digital infrastructure - solar panels on the roof, telecommunications mast in the distance, and hints of modern connectivity bringing healthcare transformation to rural Africa. Natural lighting with soft background blur, conveying hope, innovation, and the digital revolution in African healthcare. Professional photography style, suitable for a healthcare technology company website hero banner. Ultra high resolution, 16:10 aspect ratio.`;
      
      const negativePrompt = `distorted hands, extra fingers, missing fingers, deformed hands, mutated hands, poorly drawn hands, fused fingers, too many fingers, malformed hands, ugly hands, bad anatomy, disfigured, blurry, low quality, artifacts, urban cityscape, modern hospital interior, wealthy setting, developed country infrastructure`;

      const result = await runware.generateImage({
        positivePrompt,
        negativePrompt,
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