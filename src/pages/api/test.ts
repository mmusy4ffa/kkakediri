import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    console.log('File received:', file?.name);
    console.log('File size:', file?.size);
    console.log('File type:', file?.type);

    return new Response(
      JSON.stringify({
        success: true,
        fileName: file?.name || 'No file',
        fileSize: file?.size || 0,
        fileType: file?.type || 'unknown',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Test API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
