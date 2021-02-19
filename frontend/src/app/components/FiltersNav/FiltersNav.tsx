import styled from "styled-components";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import InputRange from "react-input-range";

import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FiltersNav = (): JSX.Element => {
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [priceRange, setPriceRange] = useState<any>({
    value: {
      min: 0,
      max: 2000,
    },
  });

  const FiltersSchema = Yup.object().shape({
    manuracturer: Yup.string(),
    priceFrom: Yup.string().matches(/^[0-9]+$/, "Ползвайте цифри"),
    priceTo: Yup.string().matches(/^[0-9]+$/, "Ползвайте цифри"),
    cpuSocket: Yup.string(),
  });

  return (
    <Wrap className="d-flex flex-column p-1">
      <IconWrap
        className="d-flex align-items-center justify-content-center"
        onClick={() => setShowFilters(!showFilters)}
      >
        {
          <FontAwesomeIcon
            icon={showFilters ? faAngleDoubleUp : faAngleDoubleDown}
          />
        }
      </IconWrap>

      {showFilters && (
        <FiltersWrap className="d-flex flex-column mt-2">
          <FilterRow className="d-flex p-3">
            <PriceRangeWrap className="d-flex flex-column">
              <Title>
                <span>Цена</span>
              </Title>

              <StyledInputRange
                formatLabel={(value) => `${value} лв.`}
                maxValue={2000}
                minValue={0}
                value={priceRange?.value}
                allowSameValues
                onChange={(value) => setPriceRange({ ...priceRange, value })}
                onChangeComplete={(value) =>
                  setPriceRange({ ...priceRange, value })
                }
              />
            </PriceRangeWrap>
          </FilterRow>
        </FiltersWrap>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 2px dashed;
  min-height: 34px;
`;

const IconWrap = styled.div`
  border: 2px dashed;
  width: 100%;
  height: 34px;
`;

const FiltersWrap = styled.div`
  border: 2px dashed blue;
  word-wrap: break-word;
  overflow-y: auto;
`;

const FilterRow = styled.div`
  border: 1px solid;
  overflow-x: hidden;
`;

const PriceRangeWrap = styled.div`
  padding: 0 20px;
  min-height: 100px;
  flex: 1;
`;

const Title = styled.div`
  background-color: #5a5a5a;
  border-radius: 6px;
  color: #fff;
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const StyledInputRange = styled(InputRange)``;
