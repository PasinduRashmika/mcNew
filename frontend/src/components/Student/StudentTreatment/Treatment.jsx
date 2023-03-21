import React, { useState } from "react";
import { TextField } from "@mui/material";
import { MdSearch, MdAddCircleOutline,MdOutlineDone } from "react-icons/md";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { GrAdd } from "react-icons/gr";

import {
  TreatmentContainer,
  TreatmentSearch,
  TreatmentHeader,
  TreatmentSearchResults,
  TreatmentAdd,
  TreatmentMedicine,
  Row,
  RowOne,
  TextBox,
  Buttons,
  HorizontalRule,
  TextBoxArea,
  TableHeader,
  Table,
  TableData,
  TableRow,
} from "./TreatmentElements";

const top100Films = [
  { label: "Paracetamol", qty: 0 },
  { label: "Domperidone", qty: 0 },
  { label: "Omeprazole", qty: 0 },
  { label: "Cetirizine", qty: 0 },
  { label: "Amoxicillin", qty: 0 },
  { label: "Vitamin c", qty: 0 },
  { label: "Diclofenac sodium", qty: 0 },
  {
    label: "Theophylline",
    year: 2003,
  },
  { label: "Chlorpheniramine", year: 1966 },
  { label: "Cefalexin", year: 1999 },
  
];
const Treatment = () => {
  let [array, setArray] = useState([]);
  let [inputdata, setInputdata] = useState({ name: "", number: "" });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { name, number } = inputdata;
  let [regNO, setRegNO] = useState("");
  console.log(name);

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Submited");
    
  }

  function addinputdata() {
    if (name === "" && number === "") {
      alert("Enter Medicines and Quantities");
    } else {
      setArray([...array, { name, number }]);
      // console.log(inputdata)
      setInputdata({ name: "", number: "" });
    }
  }

  // deleting row
  function deletedata(i) {
    console.log(i, "this index row want to be delete");
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  // updatedata
  function updatedata(i) {
    let { name, number } = array[i]; //this perticular index no row data shoud be update so we get this index no row data in name or number
    setInputdata({ name, number });
    setBolin(true);
    setIndex(i);
  }

  //know add data at perticular index means update it on that index
  function updateinfo() {
    let total = [...array];
    total.splice(index, 1, { name, number });
    setArray(total);
    setBolin(false);
    setInputdata({ name: "", number: "" });
  }

  return (
    <TreatmentContainer>
      <form onSubmit={onSubmit}>
      <TreatmentSearch>
        <TreatmentHeader>
          <h2>Student Treatments</h2>
        </TreatmentHeader>
          <Row>
            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Registration NO"
                defaultValue={regNO}
                onChange={(e) => setRegNO(e.target.value)}
              />
            </TextBox>

            <Buttons>
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<MdSearch />}
              >
                Search
              </Button>
            </Buttons>
          </Row>

          <HorizontalRule />
        {/* </form> */}
      </TreatmentSearch>
      <TreatmentSearchResults>
        {/* <form> */}
          <RowOne>
            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Full Name"
                //   defaultValue={name}
                //   onChange={e => setName(e.target.value)}
              />
            </TextBox>

            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Registration NO"
                //   defaultValue={name}
                //   onChange={e => setName(e.target.value)}
              />
            </TextBox>
          </RowOne>

          <RowOne>
            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Email"
                //   defaultValue={name}
                //   onChange={e => setName(e.target.value)}
              />
            </TextBox>

            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Age"
                //   defaultValue={name}
                //   onChange={e => setName(e.target.value)}
              />
            </TextBox>
          </RowOne>
        {/* </form> */}
      </TreatmentSearchResults>
      <HorizontalRule />
      <TreatmentAdd>
        <TreatmentHeader>
          <h2>Add Treatments</h2>
        </TreatmentHeader>
        {/* <form> */}
          <Row>
            <TextBoxArea>
              <TextField
                fullWidth
                id="outlined-required"
                label="Add
                  complaints/Findings/Diagnosis"
                multiline
                rows={6}
                //   defaultValue={name}
                //   onChange={e => setName(e.target.value)}
              />
            </TextBoxArea>
          </Row>
          <Row>
            <TextBoxArea>
              <TextField
                fullWidth
                id="outlined-required"
                label="Add
                  Treatments/Remarks"
                multiline
                rows={6}
                //   defaultValue={name}
                //   onChange={e => setName(e.target.value)}
              />
            </TextBoxArea>
          </Row>
        {/* </form> */}
      </TreatmentAdd>
      <TreatmentMedicine>
        <TreatmentHeader>
          <h2>Medicines</h2>
        </TreatmentHeader>
        {/* <form> */}
          <RowOne>
            <TextBox>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" defaultValue={inputdata.name || ""} onChange={(e) => setInputdata(e.target.value)} />
                )}
              />
              {/* <TextField
                fullWidth
                id="outlined-required"
                label="Drugs"
                defaultValue={inputdata.name || ""}
                onChange={(e) => setInputdata(e.target.value)}
              /> */}
            </TextBox>

            <TextBox>
              <TextField
                fullWidth
                id="outlined-required"
                label="Quantity"
                defaultValue={inputdata.number || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </TextBox>
            <Buttons>
              <Button
                type="button"
                variant="contained"
                color="success"
                size="large"
                endIcon={<MdAddCircleOutline />}
                onClick={!bolin ? addinputdata : updateinfo}
              >
                Add
              </Button>
            </Buttons>
          </RowOne>
          <RowOne>
            <Table>
              <table border="1">
                <tbody>
                  <TableHeader>
                    <tr>
                      <th>Medicine</th>
                      <th>QTY</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </TableHeader>
                  {array &&
                    array.map((item, i) => {
                      return (
                        <TableRow>
                          <tr key={i}>
                            <TableData>
                              <td>{item.name}</td>
                            </TableData>
                            <TableData>
                              <td>{item.number}</td>
                            </TableData>
                            <TableData>
                              <td>
                                <button onClick={() => updatedata(i)}>
                                  update
                                </button>
                              </td>
                            </TableData>
                            <TableData>
                              <td>
                                <button onClick={() => deletedata(i)}>
                                  Delete
                                </button>
                              </td>
                            </TableData>
                          </tr>
                        </TableRow>
                      );
                    })}
                </tbody>
              </table>
            </Table>
          </RowOne>
          <Row>
            
            <Buttons>
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                endIcon={<MdOutlineDone />}
              >
                Submit
              </Button>
            </Buttons>
          </Row>
        
      </TreatmentMedicine>
      </form>
    </TreatmentContainer>
  );
};

export default Treatment;
