import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFacrtory, { textFilter } from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios({
      url: "http://localhost:8000/data",
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };
  const emailFormatter = (data, row) => {
    return <span>Email ={data} </span>;
  };
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
  };
  const columns = [
    {
      dataField: "Name",
      text: "Student Name",
      sort: true,
      editable: false,
      filter: textFilter(),
      //  formatter: emailFormatter,
    },
    {
      dataField: "Roll_no",
      text: "Roll No",
      sort: true,
      //  formatter: emailFormatter,
    },
    {
      dataField: "Math_marks",
      text: "Math Marks",
      sort: true,
      //  formatter: emailFormatter,
    },
    {
      dataField: "Science_marks",
      text: "Science Marks",
      sort: true,
      //  formatter: emailFormatter,
    },
    {
      dataField: "English_marks",
      text: "English Marks",
      sort: true,
      //  formatter: emailFormatter,
    },
    {
      dataField: "dropdown",
      text: "Dropdown",
      editable: {
        type: Type.SELECT,
        options: [
          {
            value: "A",
            label: "A",
          },
          {
            value: "B",
            label: "B",
          },
        ],
      },
    },
  ];
  return (
    <div className="App">
      <div id="back">
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: "dbclick",
          blurToSave: true,
          nonEditableRows: () => [1, 2, 3],
        })}
        selectRow={selectRow}
        filter={filterFacrtory()}
      />
    </div>
  );
};

export default Table;
