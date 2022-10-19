import Table from "react-bootstrap/Table";

const Prestasi = () => {
  return (
    <div style={{ marginTop: "125px", marginBottom: "200px" }}>
      <h1 className="text-white">Prestasi</h1>

      <Table className="bg-white m-auto my-5 " style={{ width: "1300px" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Yosua</td>
            <td>Putra</td>
            <td>Haloho</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lamboy</td>
            <td>Albertson</td>
            <td>Sirait</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Reinhard</td>
            <td>Hottua</td>
            <td>Simbolon</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Prestasi;
