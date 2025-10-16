import { Upload, Lock, CheckCircle, FileText } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Documents',
    description: 'Submit your orders, invoices, and supply chain documents to our platform.',
  },
  {
    icon: Lock,
    title: 'FHE Encryption',
    description: 'Documents are encrypted using ZAMA\'s fully homomorphic encryption technology.',
  },
  {
    icon: CheckCircle,
    title: 'On-Chain Storage',
    description: 'Encrypted data is securely stored on blockchain with immutable records.',
  },
  {
    icon: FileText,
    title: 'Authorized Access',
    description: 'Only authorized parties can decrypt and verify specific information.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple workflow with military-grade encryption
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center space-y-4">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-card to-muted border border-border/50 flex items-center justify-center relative group hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
                  <step.icon className="w-10 h-10 text-primary relative z-10" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
