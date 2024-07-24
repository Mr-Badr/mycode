"use client"
import Navbar from '../../../../_components/Navbar';
import Header from '../../../../_components/Header';
import React, { useEffect, useMemo, useState } from 'react'
import ComponentHeader from '../../../../_components/ComponentHeader';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Row, Col, Image, Table, Card, Form } from 'react-bootstrap';

// import widget/custom components
import FormSelect from './_widgets/FormSelect';
import Pagination from './_widgets/Pagination';
import GlobalFilter from './_widgets/GlobalFilter';

// import data files
import QuizResultsData from './_widgets/QuizResultsData';

const QuizResult = () => {

  const [filtering, setFiltering] = useState('');
  const [rowSelection, setRowSelection] = useState({});

  const sortOptions = [
    { value: 'Free', label: 'أحدث' },
    { value: 'Newest', label: 'أحدث' },
    { value: 'Oldest', label: 'أقدم' }
  ];


  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'الطلاب',
        cell: ({ getValue, row }) => {
          return (
            <div className="d-flex align-items-center">
              <Image
                src={row.original.image}
                alt=""
                className="rounded-circle avatar-md me-2"
              />
              <h5 className="mb-0">{getValue()}</h5>
            </div>
          );
        }
      },
      { accessorKey: 'score', header: 'النتيجة' },
      {
        accessorKey: 'attempts', header: 'المحاولات',
        cell: ({ getValue }) => {
          return getValue() + ' محاولة';
        }
      },
      { accessorKey: 'finishingTime', header: 'وقت الانتهاء' }

    ],
    []
  );

  const data = useMemo(() => QuizResultsData, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      rowSelection
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setFiltering,
    debugTable: false,
  })

  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;

  const setFromPage = (recordsPerPage, pageNo) => recordsPerPage * pageNo + 1;
  const setToPage = (recordsPerPage, pageNo, recordsOnCurrentPage) => {
    return recordsOnCurrentPage < recordsPerPage
      ? recordsPerPage * (pageNo + 1) - (recordsPerPage - recordsOnCurrentPage)
      : recordsPerPage * (pageNo + 1);
  };
  return (
    <div dir="rtl">
      <Header />

      <main>
        <section className="pt-5 pb-5">
          <div className="container-fluid p-4" style={{ maxWidth: "75%" }}>
            <ComponentHeader />

            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>

              <Card className="col-lg-9 col-md-8 col-12">
                <Card.Header>
                  <h3 className="mb-0">نتائج الاختبار - اختبار React الأساسي</h3>
                </Card.Header>
                <Card.Body className="border-bottom">
                  <Row className="row-cols-lg-3 row-cols-1">
                    <Col>
                      <Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
                        <Card.Body>
                          <h4 className="mb-0">المشاركين</h4>
                          <div className="mt-5 d-flex justify-content-between align-items-center lh-1">
                            <div>
                              <span className="fs-3 text-dark fw-semi-bold">27</span>
                            </div>
                            <div className="align-middle">
                              <i className="fe fe-users h2 text-danger"></i>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
                        <Card.Body>
                          <h4 className="mb-0">النتائج</h4>
                          <div className="mt-5 d-flex justify-content-between align-items-center lh-1">
                            <div>
                              <span className="fs-3 text-dark fw-semi-bold">82</span>
                            </div>
                            <div className="align-middle">
                              <i className="fe fe-clipboard h2 text-primary"></i>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
                        <Card.Body>
                          <h4 className="mb-0">المتوسط الزمني</h4>
                          <div className="mt-5 d-flex justify-content-between align-items-center lh-1">
                            <div>
                              <span className="fs-3 text-dark fw-semi-bold">00:00:42</span>
                            </div>
                            <div className="align-middle">
                              <i className="fe fe-clock h2 text-success"></i>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Body className="border-bottom">
                  <Form className="row">
                    <Col lg={9} md={7} xs={12} className="mb-lg-0 mb-2">
                      <GlobalFilter
                        filtering={filtering}
                        setFiltering={setFiltering}
                        placeholder="ابحث..."
                      />
                    </Col>
                    <Col lg={3} md={5} xs={12}>
                      <Form.Control
                        as={FormSelect}
                        placeholder="الترتيب حسب"
                        options={sortOptions}
                      />
                    </Col>
                  </Form>
                </Card.Body>
                {/* جدول النتائج */}
                <Table hover responsive className="text-nowrap table-centered">
                  <thead className='table-light'>
                    {table.getHeaderGroups().map(headerGroup => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                          <th key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map(row => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}

                  </tbody>
                </Table>
                <Card.Footer>
                  {/* الترقيم */}
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <span>عرض {setFromPage(pageSize, pageIndex)} -
                      {setToPage(pageSize, pageIndex, pageSize)} من {QuizResultsData.length}{' '} نتائج
                    </span>
                    <Pagination table={table} />
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default QuizResult;
