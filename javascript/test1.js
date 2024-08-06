import { BlobServiceClient } from "@azure/storage-blob";
import { config } from "dotenv";

config();

const blobService = BlobServiceClient.fromConnectionString(
  "DefaultEndpointsProtocol=https;AccountName=yaronpropenai;AccountKey=asBbOadhtEhhIrmP277PcaaRRR1gYhSBbQcHwrHq/ih8ODFExvcGy5PAxL5rSrEMdJxkbivIL4dA+ASt/jfbXg==;EndpointSuffix=core.windows.net"
);
