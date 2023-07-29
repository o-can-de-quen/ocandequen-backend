function getOffset(currentPage = 1, listPerPage: any = 0) {
  return (currentPage - 1) * listPerPage;
}

function emptyOrRows(rows: any = []) {
  if (!rows) {
    return [];
  }
  return rows;
}

export default {
  getOffset,
  emptyOrRows,
};
