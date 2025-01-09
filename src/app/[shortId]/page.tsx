import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    shortId: string;
  };
}

export default async function ShortIdPage({ params }: Props) {
  const prisma = new PrismaClient();
  const shortId = params.shortId;

  const data = await prisma.link.findUnique({
    where: {
      shortUrl: shortId,
    },
  });

  if (data) {
    redirect(data.url);
  }

  return (
    <div>
      <h1>Error</h1>
      <p>No se encontró la URL correspondiente a este ID.</p>
    </div>
  );
}
