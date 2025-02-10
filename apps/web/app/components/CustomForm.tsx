"use client";

import { Button, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import axios from "axios";

export type SpeciesSchema = {
  bookName: string;
  sthana: string;
  chapterNumber: string;
  singleOrCombinationDrug: string;
  formulationAsASingleDrug: string;
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
  bookName: string;
  sthana: string;
  chapterNumber: string;
  singleOrCombinationDrug: string;
  formulationAsASingleDrug: string;
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
}

export default function CustomForm() {
  const initialFormValues = {
    bookName: "Charaka Samhita",
    sthana: "Chikitsa Sthana",
    chapterNumber: "Chapter 1",
    singleOrCombinationDrug: "Single",
    formulationAsASingleDrug: "NA",
    formulationAsCombination: "NA",
    nameOfTheCombination: "NA",
    usesAsSingleDrug: "NA",
    usesAsCombination: "NA",
    useExtOrInt: "INT",
  };

  const [form] = Form.useForm<ISpeciesSchema>();

  return (
    <>
      <Form
        layout="vertical"
        initialValues={initialFormValues}
        onSubmitCapture={(e) => {
          e.preventDefault();
          const payload = form.getFieldsValue();
          console.log("form", payload);
          axios.post("/api/species", { payload }).then((res) => {
            console.log("res", res);
          });
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
          <Form.Item style={{ margin: 0 }}>
            <Button type="primary" htmlType="submit" size="large">
              Save
            </Button>
          </Form.Item>
        </Flex>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="drugName" label="Drug Name(As per Reference)">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="sanskritName" label="Sanskrit Name">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="latinName" label="Latin Name">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="bookName" label="Name of the Samhita">
              <Select>
                {[
                  "Charaka Samhita",
                  "Shushruta Samhita",
                  "Ashtang Hridaya",
                  "Ashtang Samgraha",
                ].map((book, index) => (
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
            <Form.Item name="sthana" label="Sthana">
              <Select>
                {[
                  "Chikitsa Sthana",
                  "Indriya Sthana",
                  "Kalpa Sthana",
                  "Kalpa siddhi Sthana",
                  "Kalpana Sthana",
                  "Nidana Sthana",
                  "Sharir Sthana",
                  "Sidhi Sthana",
                  "Sutra Sthana",
                  "Uttar Tantra",
                  "Vimana Sthana",
                ].map((sthana, index) => (
                  <Select.Option value={sthana} key={index}>
                    {sthana}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="chapterNumber" label="Adhyaya">
              <Select>
                {[
                  "Chapter 1",
                  "Chapter 2",
                  "Chapter 3",
                  "Chapter 4",
                  "Chapter 5",
                  "Chapter 6",
                  "Chapter 7",
                  "Chapter 8",
                  "Chapter 9",
                  "Chapter 10",
                  "Chapter 11",
                  "Chapter 12",
                  "Chapter 13",
                  "Chapter 14",
                  "Chapter 15",
                  "Chapter 16",
                  "Chapter 17",
                  "Chapter 18",
                  "Chapter 19",
                  "Chapter 20",
                  "Chapter 21",
                  "Chapter 22",
                  "Chapter 23",
                  "Chapter 24",
                  "Chapter 25",
                  "Chapter 26",
                  "Chapter 27",
                  "Chapter 28",
                  "Chapter 29",
                  "Chapter 30",
                  "Chapter 31",
                  "Chapter 32",
                  "Chapter 33",
                  "Chapter 34",
                  "Chapter 35",
                  "Chapter 36",
                  "Chapter 37",
                  "Chapter 38",
                  "Chapter 39",
                  "Chapter 40",
                  "Chapter 41",
                  "Chapter 42",
                  "Chapter 43",
                  "Chapter 44",
                  "Chapter 45",
                  "Chapter 46",
                  "Chapter 47",
                  "Chapter 48",
                  "Chapter 49",
                  "Chapter 50",
                ].map((chapter, index) => (
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
            <Form.Item name="verseNumber" label="Sutra">
              <InputNumber size="large" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="partOfPlantUsed" label="Part of Plant Used">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="singleOrCombinationDrug"
              label="Single/Combination drug?"
            >
              <Select>
                {["Single", "Combination", "Both", "Other"].map(
                  (type, index) => (
                    <Select.Option value={type} key={index}>
                      {type}
                    </Select.Option>
                  ),
                )}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="formulationAsASingleDrug"
              label="Formulation as a single drug"
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
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="nameOfTheCombination"
              label="Name of the combination"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="usesAsSingleDrug" label="Uses as single drug">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="usesAsCombination" label="Uses as combination">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="useExtOrInt" label="Use- INT/EXT">
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
            <Form.Item name="typeOfExtUse" label="Type of EXT use">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="parenteralRoute" label="Parenteral Route">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="anupana" label="Anupana">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="sahapana" label="Sahapana/Sahopayogi Dravya">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="granthadikara" label="Granthadikara">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="rogadhikara" label="Rogadhikara">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="remarks" label="Remarks">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
