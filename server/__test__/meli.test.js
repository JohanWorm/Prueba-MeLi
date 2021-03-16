import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';

const expect = chai.expect;
const urlServerItems = "localhost:3002/api/items";
let dataItem = {};
let dataItems = {};

chai.use(chaiHttp);

describe('TEST BACK Item', () => {
    beforeEach(() => {
        dataItem = JSON.parse(fs.readFileSync(__dirname + '/../../__mockData__/product-detail.json'));
        dataItems = JSON.parse(fs.readFileSync(__dirname + '/../../__mockData__/products-list.json'));
    });

    it("Debería respoder status 200 y el detalle del producto", (done) => {
        chai.request(urlServerItems)
            .get("/MLA817640315")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.eql(dataItem);
                done();
            });
    });

    it("Debería respoder status 200 y el listado de productos", (done) => {
        chai.request(urlServerItems)
            .get("?q=cama&limit=4")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.eql(dataItems);
                done();
            });
    });
});
