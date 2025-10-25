export const metadata = {
  title: "Cashy - Health Check"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{margin: 0}}>
        {children}
      </body>
    </html>
  );
}
