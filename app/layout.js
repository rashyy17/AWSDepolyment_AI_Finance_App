import "./globals.css";

export const metadata = {
  title: "Cashy - Personal Finance Dashboard",
  description: "Track your finances, manage budgets, and achieve your financial goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
