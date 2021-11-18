import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: 'Hello, world.',
    cookies: [
      {
        name: '__HOST-Testing',
        value: 'value2',
        secure: true,
        domain: ''
        //path: '/'
      }
    ]
  }
}

export default httpTrigger
