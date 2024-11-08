export enum Endpoints {
  GET_BASES = 'https://api.airtable.com/v0/meta/bases',
  GET_BASESCHEMA = 'https://api.airtable.com/v0/meta/bases/{baseId}',
  GET_RECORDS = 'https://api.airtable.com/v0/{baseId}/{tableIdOrName}'
}
