import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Zap, FileCheck, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Full Privacy Protection',
    description: 'Orders and invoices remain encrypted on-chain using ZAMA FHE technology, ensuring complete confidentiality.',
  },
  {
    icon: Lock,
    title: 'Homomorphic Encryption',
    description: 'Perform computations on encrypted data without ever decrypting it, maintaining privacy at all times.',
  },
  {
    icon: FileCheck,
    title: 'Immutable Records',
    description: 'All transactions are recorded on blockchain, providing tamper-proof audit trails for compliance.',
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Real-time verification of encrypted documents without compromising sensitive business information.',
  },
  {
    icon: Users,
    title: 'Multi-Party Access',
    description: 'Controlled access to encrypted data ensures only authorized parties can view specific information.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solution',
    description: 'Built to handle enterprise-level supply chain operations with optimal performance.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Privacy Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with cutting-edge cryptography to protect your most sensitive business data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
