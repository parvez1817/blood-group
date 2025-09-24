import Navigation from "@/components/Navigation";
import FileUploadZone from "@/components/FileUploadZone";
import { Card } from "@/components/ui/card";
import { Activity, Brain, Shield, Zap } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze fingerprint patterns"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get your blood group prediction in seconds, not days"
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "Our model achieves over 90% accuracy in blood group prediction"
    },
    {
      icon: Activity,
      title: "Non-Invasive",
      description: "No needles required - just upload a fingerprint image"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Advanced Blood Group{" "}
            <span className="text-primary">Prediction</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Using cutting-edge AI technology to predict blood groups from
            fingerprint analysis with high accuracy and reliability.
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-16">
          <FileUploadZone />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="medical-card p-6 text-center">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* How It Works Section */}
        <Card className="medical-card p-8">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Image</h3>
              <p className="text-muted-foreground">
                Take a clear photo of your fingerprint and upload it to our secure platform
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our trained neural network analyzes the unique patterns in your fingerprint
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground">
                Receive your predicted blood group with confidence percentage instantly
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Home;