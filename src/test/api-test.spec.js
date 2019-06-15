import path from "path";
import caller from 'grpc-caller';
import { expect } from 'chai';

const PROTO_PATH = path.resolve(__dirname, '../protos/movies.proto');

const client = caller('127.0.0.1:5053', PROTO_PATH, 'MovieService');

describe('Testing Movies', async () => {
  it('Shold return all title with search name', async () => {
    const res = await client.searchMovie({ movieName: 'Bob', page: 1 })
    let name = res.movies.filter((titleSearch) => {titleSearch.title.indexOf("Bob")});
    expect(name === -1, "The title does not contain the searched word")
  })
})