import { string, boolean, object, array } from 'yup';

const schema = array()
  .of(
    object({
      address: string().required(),
      isOnline: boolean().required(),
    })
  )
  .max(10);

export default defineEventHandler(async event => {
  const body = await readBody(event);

  try {
    const data = await schema.validate(body);
    if (!data?.length) throw Error;

    for (const m of data) {
      await MachineSchema.findOneAndUpdate({ address: m.address }, m);
    }

    return { data };
  } catch (e) {
    setResponseStatus(event, 418);
    return;
  }
});
