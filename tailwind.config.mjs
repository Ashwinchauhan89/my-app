/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   safelist: [
    // gradients
    "from-blue-500", "via-blue-400", "to-cyan-400",
    "from-purple-500", "via-violet-500", "to-fuchsia-500",
    "from-teal-400", "via-emerald-400", "to-green-400",
    "from-orange-500", "via-amber-500", "to-yellow-500",
    "from-indigo-500", "via-blue-600", "to-indigo-400",
    "from-pink-500", "via-rose-500", "to-red-400",

    // text colors
    "text-blue-400", "text-purple-400", "text-teal-400",
    "text-orange-400", "text-indigo-400", "text-pink-400",

    // glow backgrounds
    "bg-blue-500/10", "bg-purple-500/10", "bg-teal-500/10",
    "bg-orange-500/10", "bg-indigo-500/10", "bg-pink-500/10",

    // solid
    "bg-blue-500", "bg-purple-500", "bg-teal-500",
    "bg-orange-500", "bg-indigo-500", "bg-pink-500",

    // borders
    "group-hover:border-blue-500/50",
    "group-hover:border-purple-500/50",
    "group-hover:border-teal-500/50",
    "group-hover:border-orange-500/50",
    "group-hover:border-indigo-500/50",
    "group-hover:border-pink-500/50",

    // icons text colors
    "text-blue-400", "text-purple-400", "text-teal-400",
    "text-orange-400", "text-indigo-400", "text-pink-400",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
