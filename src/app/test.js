const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
const params = {
  TableName: "your-table-name",
  /* Item properties will depend on your application concerns */
  Key: {
    id: "12345",
  },
};
exports.handler = async (event, context) => {
  try {
    const data = await getItem();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { error: err };
  }
};

async function getItem() {
  try {
    const data = await ddb.get(params).promise();
    return data;
  } catch (err) {
    return err;
  }
}
