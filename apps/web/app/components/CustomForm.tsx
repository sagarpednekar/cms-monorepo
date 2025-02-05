import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function CustomForm() {
  const initialFormValues = {
    book_name: "Charaka Samhita",
    sthana: "Chikitsa Sthana",
    chapter_number: "Chapter 1",
    single_or_combination_drug: "Single",
    formulation_as_a_single_drug: "NA",
    formulation_as_combination: "NA",
    name_of_the_combination: "NA",
    uses_as_single_drug: "NA",
    uses_as_combination: "NA",
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary"> Save </Button>
      </div>

      <h1>Create an entry</h1>
      <Form layout="vertical" initialValues={initialFormValues}>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="drug_name" label="Drug Name(As per Reference)">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="sanskrit_name" label="Sanskrit Name">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="latin_name" label="Latin Name">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="book_name" label="Name of the Samhita">
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
            <Form.Item name="chapter_number" label="Adhyaya">
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
            <Form.Item name="verse_number" label="Sutra">
              <InputNumber size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="part_of_plant_used" label="Part of Plant Used">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="single_or_combination_drug"
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
              name="formulation_as_a_single_drug"
              label="Formulation as a single drug"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="formulation_as_combination"
              label="Formulation as a combination drug"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="name_of_the_combination"
              label="Name of the combination"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="uses_as_single_drug" label="Uses as single drug">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="uses_as_combination" label="Uses as combination">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="use_ext_or_int" label="Use- INT/EXT">
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
            <Form.Item name="type_of_ext_use" label="Type of EXT use">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item name="parenteral_route" label="Parenteral Route">
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
