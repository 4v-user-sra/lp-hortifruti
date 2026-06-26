/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Diferenciais } from "./components/Diferenciais";
import { FinalCTA } from "./components/FinalCTA";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Testimonials />
      <Diferenciais />
      <FinalCTA />
      <FloatingWhatsApp />
    </main>
  );
}
