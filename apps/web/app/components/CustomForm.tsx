"use client";

import { Button, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  bookNameOptions,
  chapterNumberOptions,
  sthanaOptions,
} from "../config";

export type SpeciesSchema = {
  bookName: string;
  sthana: string;
  chapterNumber: string;
  singleOrCombinationDrug: string;
  formulationAsSingleDrug: string;
  formulationAsCombination: string;
  nameOfTheCombination: string;
  usesAsSingleDrug: string;
  usesAsCombination: string;
  drugName: string;
  sanskritName: string;
  latinName: string;
  partOfPlantUsed: string;
  typeOfExtUse: string;
  parenteralRoute: string;
  anupana: string;
  sahapana: string;
  granthadikara: string;
  rogadhikara: string;
  verseNumber: string;
  remarks: string;
};

export interface ISpeciesSchema {
  [key: string]: string;
  bookName: string;
  sthana: string;
  chapterNumber: string;
  singleOrCombinationDrug: string;
  formulationAsSingleDrug: string;
  formulationAsCombination: string;
  nameOfTheCombination: string;
  usesAsSingleDrug: string;
  usesAsCombination: string;
  drugName: string;
  sanskritName: string;
  latinName: string;
  partOfPlantUsed: string;
  useExtOrInt: string;
  typeOfExtUse: string;
  parenteralRoute: string;
  anupana: string;
  sahapana: string;
  granthadikara: string;
  rogadhikara: string;
  verseNumber: string;
  remarks: string;
  id: string;
}

const stringifyFormValues = (
  values: Partial<ISpeciesSchema>
): Record<keyof ISpeciesSchema, string> => {
  const stringified: Partial<Record<keyof ISpeciesSchema, string>> = {};

  (Object.keys(values) as Array<keyof ISpeciesSchema>).forEach((key) => {
    const value = values[key];
    stringified[key] =
      value === null || value === undefined ? "NA" : String(value).trim();
  });

  return stringified as Record<keyof ISpeciesSchema, string>;
};

export default function CustomForm({
  formMode,
  speciesIntialValues,
  isLoading,
}: {
  formMode: "create" | "update";
  speciesIntialValues?: Partial<ISpeciesSchema>;
  isLoading?: boolean;
}) {
  const router = useRouter();
  const [form] = Form.useForm<ISpeciesSchema>();

  if (isLoading) {
    return <div>Loading...</div>;
   
  }

  return (
    <>
      <Form
        layout="vertical"
        initialValues={speciesIntialValues}
        onSubmitCapture={async (e) => {
          try {
            e.preventDefault();
            await form.validateFields();

            const formValues = form.getFieldsValue();

            const stringifiedValues = stringifyFormValues({
              ...formValues,
              ...(formMode === "update" ? { id: speciesIntialValues?.id } : {}),
            });

            if (formMode === "update") {
              axios.put(`/api/species`, stringifiedValues);
            } else {
              axios.post("/api/species", stringifiedValues);
            }
            router.push("/");
          } catch (error) {
            console.log("error", error);
          }
        }}
        onError={(error) => console.log("error", error)}
        form={form}
      >
        <Flex
          justify="space-between"
          align="center"
          style={{
            padding: "1.5em 0",
          }}
        >
          <Title level={2} style={{ margin: 0 }}>
            Create an entry
          </Title>
          {/* <Form.Item style={{ margin: 0 }}>
            <Button type="primary" htmlType="submit" size="large">
              Save
            </Button>
          </Form.Item> */}
        </Flex>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="drugName"
              label="Drug Name(As per Reference)"
              rules={[
                { required: true, message: "Please enter the drug name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="sanskritName"
              label="Sanskrit Name"
              rules={[
                { required: true, message: "Please enter the Sanskrit name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="latinName"
              label="Latin Name"
              rules={[
                { required: true, message: "Please enter the Latin name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="bookName"
              label="Name of the Samhita"
              rules={[
                { required: true, message: "Please select the book name" },
              ]}
            >
              <Select>
                {bookNameOptions.map((book, index) => (
                  <Select.Option value={book} key={index}>
                    {book}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="sthana"
              label="Sthana"
              rules={[{ required: true, message: "Please select the sthana" }]}
            >
              <Select>
                {sthanaOptions.map((sthana, index) => (
                  <Select.Option value={sthana} key={index}>
                    {sthana}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="chapterNumber"
              label="Adhyaya"
              rules={[
                { required: true, message: "Please select the chapter number" },
              ]}
            >
              <Select>
                {chapterNumberOptions.map((chapter, index) => (
                  <Select.Option value={chapter} key={index}>
                    {chapter}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="verseNumber"
              label="Verse Number"
              rules={[
                { required: true, message: "Please enter the verse number" },
              ]}
            >
              <InputNumber size="large" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="partOfPlantUsed"
              label="Part of Plant Used"
              rules={[
                {
                  required: true,
                  message: "Please enter the part of plant used",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="singleOrCombinationDrug"
              label="Single/Combination drug?"
              rules={[
                { required: true, message: "Please select the type of drug" },
              ]}
            >
              <Select>
                {["Single", "Combination", "Both", "Other"].map(
                  (type, index) => (
                    <Select.Option value={type} key={index}>
                      {type}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="formulationAsSingleDrug"
              label="Formulation as a single drug"
              rules={[
                { required: true, message: "Please enter the formulation" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="formulationAsCombination"
              label="Formulation as a combination drug"
              rules={[
                { required: true, message: "Please enter the formulation" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="nameOfTheCombination"
              label="Name of the combination"
              rules={[
                {
                  required: true,
                  message: "Please enter the name of the combination",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="usesAsSingleDrug"
              label="Uses as single drug"
              rules={[
                {
                  required: true,
                  message: "Please enter the uses as single drug",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="usesAsCombination"
              label="Uses as combination"
              rules={[
                {
                  required: true,
                  message: "Please enter the uses as combination",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="useExtOrInt"
              label="Use- INT/EXT"
              rules={[
                { required: true, message: "Please select the use type" },
              ]}
            >
              <Select>
                {["INT", "EXT"].map((type, index) => (
                  <Select.Option value={type} key={index}>
                    {type}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="typeOfExtUse"
              label="Type of EXT use"
              rules={[
                {
                  required: true,
                  message: "Please enter the type of external use",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="parenteralRoute"
              label="Parenteral Route"
              rules={[
                {
                  required: true,
                  message: "Please enter the parenteral route",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="anupana"
              label="Anupana"
              rules={[{ required: true, message: "Please enter the anupana" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="sahapana"
              label="Sahapana/Sahopayogi Dravya"
              rules={[{ required: true, message: "Please enter the sahapana" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="granthadikara"
              label="Granthadikara"
              rules={[
                { required: true, message: "Please enter the granthadikara" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="rogadhikara"
              label="Rogadhikara"
              rules={[
                { required: true, message: "Please enter the rogadhikara" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="remarks"
              label="Remarks"
              rules={[{ required: true, message: "Please enter the remarks" }]}
            >
              <TextArea />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
