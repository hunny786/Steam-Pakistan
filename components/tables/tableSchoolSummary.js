import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import ConfirmationModal from '../popups/Confirmation';

function createData(name, session, status, details, approve) {
    return {
      name,
      session,
      status,
      details,
      approve,
    };
  }

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = [
    {
      id: 'name',
      numeric: true,
      label: 'School Name',
    },
    {
      id: 'session',
      numeric: false,
      label: 'Session Held',
    },
    {
      id: 'status',
      numeric: false,
      label: 'Status',
    },
    {
      id: 'details',
      numeric: false,
      label: 'Details',
    },
    {
      id: 'approve',
      numeric: false,
      label: <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick-double.png" /></a>,
    },
  ];
  return (
    <>
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'center'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <ConfirmationModal
    show={modalShow}
    onHide={() => setModalShow(false)}
    >
    </ConfirmationModal>
    </>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function SchoolSummaryTable() {
  const [modalShow, setModalShow] = React.useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
const rows = [
    createData('Math Circles', '05-july-2022', <span className='text-danger'>Pending</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Arts', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Chems & colors', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Chems & colors', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Chems & colors', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Elasticity', '05-july-2022', <span className='text-danger'>Pending</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Arts', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Chems & colors', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Chems & colors', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
    createData('Chems & colors', '05-july-2022', <span className='text-warning'>District Approval</span>, <a href='./schoolSecondLevel'><img src='../icons/icon-view.png' /></a>, <a onClick={() => setModalShow(true)} href='#'><img src="../icons/icon-tick.png" /></a>),
];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.session}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{row.details}</TableCell>
                      <TableCell align="center">{row.approve}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
    <ConfirmationModal
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
    </>
  );
}
