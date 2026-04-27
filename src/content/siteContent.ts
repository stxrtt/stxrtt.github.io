import type { LucideIcon } from 'lucide-react';
import { Coins, HandCoins, ShieldCheck, Target, Users, Wallet } from 'lucide-react';

export const navigation = [
  { label: 'What it is', href: '#what-it-is' },
  { label: 'Who it’s for', href: '#who-its-for' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Get started', href: '#cta' },
];

export const heroIcons = [Coins, HandCoins, Wallet, Users] as const satisfies readonly LucideIcon[];

export const whatItIs = [
  {
    title: 'Save towards one shared goal',
    description: 'WorldPool helps groups organise contributions around a clear purpose, so everyone is working from the same plan.',
    icon: Target,
  },
  {
    title: 'Keep ownership with the people saving',
    description: 'The model is non-custodial, so users stay in control while the product adds structure and transparency.',
    icon: ShieldCheck,
  },
  {
    title: 'Built for trust-first communities',
    description: 'It is designed for the way people already save together: in circles of family, friends, neighbours, and community.',
    icon: Users,
  },
];

export const whoItIsFor = [
  {
    title: 'Friends and family groups',
    description: 'People saving together for something practical: travel, rent, school fees, weddings, or a shared purchase.',
  },
  {
    title: 'Community-led savings circles',
    description: 'Groups that already use informal savings habits and want a clearer, more reliable structure.',
  },
  {
    title: 'World Network communities',
    description: 'Users who want a simple Mini App experience that feels native to the World ecosystem.',
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Create a pool',
    description: 'Start a savings pool around a specific goal and invite the people who will contribute.',
  },
  {
    step: '02',
    title: 'Track progress clearly',
    description: 'Everyone can see the same progress, contribution status, and shared target.',
  },
  {
    step: '03',
    title: 'Move together with confidence',
    description: 'The structure keeps the group aligned while preserving a trust-first approach to saving.',
  },
];
