import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '零碳智评｜园区新能源投融资决策平台',
  description: '零碳园区新能源项目的融资前决策、风险诊断与报告生成 Demo。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

