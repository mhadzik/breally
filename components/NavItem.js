import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getAllPages } from "../helpers/api-service";

const StyledLi = styled.li`
  padding: 0 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    text-transform: capitalize;
  }
`;

const NavItem = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const res = await getAllPages();
    setIsLoading(true);
    if (res) {
      setData(res);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return data.map((item) => {
    if (item.url !== "/") {
      return (
        <StyledLi key={item.id}>
          <Link href={item.url}>{item.url.replace("/", "")}</Link>
        </StyledLi>
      );
    }
  });
};

export default NavItem;
