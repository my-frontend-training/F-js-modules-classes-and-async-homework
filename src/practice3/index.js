const buildData = (data) => {
  const { content, origin, author } = data;
  return [origin, author, content];
};

function handleJSONResponse(response) {
  return response.json().then((json) => {
    if (response.ok) {
      return json;
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      ...json,
      status: response.status,
      statusText: response.statusText,
    });
  });
}

function handleTextResponse(response) {
  return response.text().then((text) => {
    if (response.ok) {
      return text;
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
      err: text,
    });
  });
}

function handleResponse(response) {
  const contentType = response.headers.get("content-type");
  if (contentType.includes("application/json")) {
    return handleJSONResponse(response);
  }
  if (contentType.includes("text/html")) {
    return handleTextResponse(response);
  }
  throw new Error(`Sorry, content-type ${contentType} not supported`);
}

export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then(handleResponse)
    .then((json) => {
      return buildData(json);
    })
    .catch((error) => console.log(error));
};
