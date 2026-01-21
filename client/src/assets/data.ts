import type { ServiceType } from "../types/service";
import {
  Smartphone,
  Globe,
  LayoutDashboard,
  BotMessageSquare,
} from "lucide-react";
export const data: ServiceType[] = [
  {
    title: "Web Development",
    desc: "At NileTech, we provide comprehensive website development services that go beyond just aesthetics. We specialize in building custom, high-performance websites and web applications with robust, built-in SEO strategies designed for long-term organic growth and visibility. ",
    Icon: Globe,
  },
  {
    title: "Mobile Development",
    desc: "We prioritize the design and implementation of digital products that deliver a responsive, smooth, and highly intuitive user experience (UX). We believe that exceptional UX is not just a feature—it's a critical business differentiator that directly enhances user engagement, conversion rates, and overall brand loyalty.",
    Icon: Smartphone,
  },
  {
    title: "Dashboards",
    desc: "Stop drowning in cells and formulas. Our solution automates your data workflows from the ground up, ensuring you don't have to deal with endless, error-prone spreadsheets anymore. Redirect your energy from manual entry to high-level strategy.",
    Icon: LayoutDashboard,
  },
  {
    title: "Chatbots",
    desc: "Your business shouldn't sleep just because you do. Our intelligent chatbots act as your 24/7 digital concierge, handling inquiries, booking appointments, and qualifying leads in real-time. Imagine when a customer can access your service while you are not around, receiving instant, accurate support that turns casual visitors into loyal clients without you ever lifting a finger.",
    Icon: BotMessageSquare,
  },
];
