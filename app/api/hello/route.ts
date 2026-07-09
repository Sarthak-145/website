export const GET = async (request: Request) => {
  const url = new URL(request.url);
  //console.log(url);
  console.log(url.search);
  console.log(url.searchParams.get('name'));

  return Response.json({
    message: 'Hello from next',
  });
};

export const POST = async (request: Request) => {
  const url = new URL(request.url);
  console.log(url.pathname);

  const received = await request.json();

  console.log('recieved body: ', received);

  return Response.json({
    body: received,
  });
};
