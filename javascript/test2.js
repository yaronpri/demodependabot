import { BlobServiceClient } from "@azure/storage-blob";
import { config } from "dotenv";

config();

const blobService = BlobServiceClient.fromConnectionString(
  "DefaultEndpointsProtocol=https;AccountName=yaronpropenai;AccountKey=vvaNjcU3EIeqUlZdu4p6WEAGr8nTWs2KD/YlWhDCSJklCcIfWp1n1Dvz/a2KejX9iDwWBV7vKic/+AStmyAWNg==;EndpointSuffix=core.windows.net"
);
