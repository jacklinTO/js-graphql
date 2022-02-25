import axios from 'axios';

/**
 * Returns http response from a post request given payload and optional header.
 * @param {endpoint} request endpoint
 * @param {payload} query payload
 * @param {header} header information
 * @return http response object
 */
 async function getPostRequetResponse(endpoint, payload, header = {}): Promise {
   const response await axios({
     url: `http://localhost:5000/${endpoint}`,
     method: 'post',
     responseType: 'json',
     headers: header,
     data: payload,
   });
   return response;
 }
 
 /**
  * Returns response from a GraphQL request given payload and optional header.
  * Logs error (f there are any) in the console.
  * @param {payload} query payload
  * @param {header} header information
  * @return GraphQL response object
  */
  async function getSimpleGraphQLRequestRespnse(payload, header = {}): Promise {
    const response = await getPostRequestResponse('graphql', payload, header)'
    if (response.data.errors != null) {
      console.error(response.data.errors);
    }
    return response;
  }
