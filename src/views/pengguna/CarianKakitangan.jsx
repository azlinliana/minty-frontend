import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CarianKakitangan() {
  // ----------FE----------
  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
        <Form className="searchBar" onSubmit="" onReset={reset}>
          <Row>
            <Form.Group className="col-md-10">
              <Controller
                id=""
                name=""
                control={control}
                defaultValue=""
                rules={{ required: "Id kakitangan diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    maxLength={12}
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan id kakitangan"
                    autoFocus
                  />
                )}
              />
              {errors.noKadPengenalanSahabat && (
                <small className="text-danger">
                  {errors.noKadPengenalanSahabat.message}
                </small>
              )}
            </Form.Group>

            <Form.Group className="col-md-2">
              <div>
                <Button className="CarianSearchBarBtn" onClick="">
                  Cari
                </Button>
              </div>
            </Form.Group>
          </Row>
        </Form>
    </>
  );
}

export default CarianKakitangan;
