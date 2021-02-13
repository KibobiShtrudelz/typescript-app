import styled from "styled-components";

export const FiltersNav = (): JSX.Element => {
  return (
    <Wrap className="container-fluid">
      <button type="button" data-toggle="collapse" data-target="#filters-nav">
        Click me
      </button>

      <div id="filters-nav" className="collapse">
        <h1>Wazaaaaaaaaaaa</h1>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div``;
