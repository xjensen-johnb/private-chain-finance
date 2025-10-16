import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Database, Shield, Boxes } from 'lucide-react';

export const Technology = () => {
  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powered by
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ZAMA FHE
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Leveraging fully homomorphic encryption for unprecedented privacy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              {/* Main Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">ZAMA Fully Homomorphic Encryption</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform utilizes ZAMA's groundbreaking FHE technology, enabling computations on encrypted data 
                  without ever decrypting it. This means your sensitive supply chain information remains private at all 
                  times, even during processing and verification.
                </p>
              </div>

              {/* Tech Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Zero Knowledge</h4>
                  <p className="text-sm text-muted-foreground">
                    Verify information without revealing underlying data
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold">Encrypted Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    All data remains encrypted on-chain at rest and in transit
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Boxes className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold">Smart Contracts</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated workflows with encrypted business logic
                  </p>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="pt-6 border-t border-border/50">
                <a 
                  href="https://www.zama.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Learn more about ZAMA FHE Technology
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
