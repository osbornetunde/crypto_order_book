import styled from "styled-components";

const StyledSelect = styled.select`
  display: block;
  font-weight: 400;
  line-height: 1.4;
  appearance: none;
  outline: 0;
  background: transparent;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC1kb3duIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnoiPjwvcGF0aD48L3N2Zz4="),
    linear-gradient(to bottom, #fff 0%, #e5e5e5 100%);
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%, 0 0;
  background-size: 0.65rem auto, 100%;
  border: 1px solid rgba(116, 223, 112, 0.9);
  width: 50%;
  height: 2rem;
  margin: 0;
  padding: 0 0 0 0.5rem;
  color: #000;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  text-overflow: ellipsis;
  &:hover {
    border: 1px solid #888;
  }

  &:focus {
    border: 1px solid #000639;
    box-shadow: 0 0 1px 1px rgba(0, 6, 57, 0.3);
  }

  &::-ms-expand {
    display: none;
  }
`;

export default StyledSelect;
