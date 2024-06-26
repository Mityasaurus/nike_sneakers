import { Grid, Pagination, PaginationItem } from "@mui/material";
import React, { useState } from "react";
import SneakersCardVert from "./SneakersCardVert";
import s from "../style/paginatedSneakers.module.css";
import { West as ArrowBack, East as ArrowForward } from "@mui/icons-material";

export default function PaginatedSneakers({ sneakersData, size }) {
  const itemsPerPage = size;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = sneakersData.slice(startIndex, endIndex);

  const handleChange = (e, value) => {
    setCurrentPage(value);
  };
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <p
        style={{
          fontSize: "40px",
          fontWeight: "800",
          marginLeft: "55px",
          marginBottom: "25px",
        }}
      >
        Top sneakers
      </p>
      <Pagination
        className={s.pagination}
        size="large"
        count={Math.ceil(sneakersData.length / itemsPerPage)}
        page={currentPage}
        variant="outlined"
        boundaryCount={0}
        hideNextButton={false}
        hidePrevButton={false}
        onChange={handleChange}
        style={{ marginRight: "55px", marginBottom: "25px" }}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBack, next: ArrowForward }}
            {...item}
          />
        )}
      />

      <Grid
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        width={"100%"}
      >
        {currentItems.map((s) => (
          <SneakersCardVert name={s.name} price={s.price} img={s.img} />
        ))}
      </Grid>
    </Grid>
  );
}
