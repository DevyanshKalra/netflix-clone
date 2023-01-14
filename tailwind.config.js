/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  safelist:[
    "bg-black",
    "bg-white",
    "text-black",
    "text-white",
    "bg-slate-200",
    "bg-neutral-800",
    "border-b-8 border-neutral-800 border-stone-100",
    "sm:text-base md:text-xl text-white font-semibold",
    "justify-center p-3 self-center",
    "flex",
    

  ],
  plugins: [],
}
