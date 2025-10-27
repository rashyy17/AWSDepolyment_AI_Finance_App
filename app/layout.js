import "./globals.css";
import { TransactionProvider } from './context/TransactionContext';

export const metadata = {
  title: "Cashy - Personal Finance Dashboard",
  description: "Manage your finances with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <TransactionProvider>
          {children}
        </TransactionProvider>
      </body>
    </html>
  );
}
