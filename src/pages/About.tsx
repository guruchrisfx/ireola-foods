import { ShieldCheck, Package, Users, Heart } from "lucide-react";
import logo from "@/assets/ireola-logo.png";

const About = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <img src={logo} alt="Ireola Foods" className="h-24 w-24 rounded-full mx-auto mb-6 object-cover border-4 border-primary-foreground/20" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">About Ireola Foods</h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Lagos' No. 1 measured cereals vendor — trusted by 10,400+ followers and families across Nigeria.
        </p>
      </div>
    </section>

    <section className="container py-12 md:py-20 max-w-3xl">
      <h2 className="font-display text-2xl font-bold mb-4">Our Story</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Ireola Foods was founded by Iretomiwa with a simple mission: to make quality breakfast cereals and beverages accessible and affordable for every Nigerian household.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Based in Ojodu Berger, Lagos, we carefully measure cereals, milk, and foodstuffs directly from original manufacturer bags. This means you get the exact same quality as packaged goods — at much better prices.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Whether you need a paint bucket measurement for your family, a half bag for your small business, or a full bag for wholesale — Ireola Foods has you covered with fast delivery anywhere in Nigeria.
      </p>
    </section>

    <section className="bg-cream py-12 md:py-16">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { icon: ShieldCheck, title: "Authentic Quality", desc: "From original manufacturer bags" },
          { icon: Package, title: "Measured Fresh", desc: "Careful portioning every time" },
          { icon: Users, title: "500+ Customers", desc: "Trusted across Lagos" },
          { icon: Heart, title: "Customer First", desc: "Your satisfaction matters" },
        ].map((item, i) => (
          <div key={i}>
            <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
