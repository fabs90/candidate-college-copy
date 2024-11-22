import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Input from "./atom/Input";
import Label from "./atom/Label";
import Option from "./atom/Option";
import Select from "./atom/Select";
import axios from "axios";
import type { member } from "./FormTemp";
import InputNumber from "./atom/InputNumber";
export default function InputFormTemplate({
  state,
}: {
  state: [member, React.Dispatch<React.SetStateAction<member>>];
}) {
  const [divisions, setDivisions] = useState<any[]>([]);
  const [positions, setPositions] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [form, setForm] = state;
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const data = await axios.get("/api/divisions", {
          headers: { "x-appname-key": "weekly-report" },
        });
        const datapos = await axios.get("/api/positions", {
          headers: { "x-appname-key": "weekly-report" },
        });
        setDivisions(data.data.data);
        setPositions(datapos.data.data);

        setForm((prev) => {
          return {
            ...prev,
            position_slug: datapos.data.data[0].slug,
            division_slug: data.data.data[0].slug,
          };
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <InputForm>
        <Label htmlFor="firstName">
          First Name <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Input
          value={form?.firstName}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                firstName: e.target.value,
              };
            })
          }
          placeholder="First Name"
          type="text"
          id="firstName"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="lastName">
          Last Name <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Input
          value={form?.lastName}
          placeholder="Last Name"
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                lastName: e.target.value,
              };
            })
          }
          type="text"
          id="lastName"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="division">
          Division <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Select
          defaultValue={divisions[0]?.slug}
          placeholder="Division"
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                division_slug: e.target.value,
              };
            })
          }
          id="division"
        >
          {isLoading ? (
            <Option>Loading...</Option>
          ) : (
            divisions.map(({ name, slug }, index) => {
              return (
                <Option value={slug} key={index}>
                  {name}
                </Option>
              );
            })
          )}
        </Select>
      </InputForm>
      <InputForm>
        <Label htmlFor="position">
          Position <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Select
          placeholder="Position"
          defaultValue={positions[0]?.slug}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                position_slug: e.target.value,
              };
            })
          }
          id="position"
        >
          {positions.map(({ slug, name }) => {
            return <Option value={slug}>{name}</Option>;
          })}
        </Select>
      </InputForm>
      <InputForm>
        <Label htmlFor="linkedinAccount">
          Linkedin Account <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Input
          value={form?.linkedin}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                linkedin: e.target.value,
              };
            })
          }
          placeholder="Linkedin Account"
          type="text"
          id="linkedinAccount"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="instagramAccount">
          Instagram Account <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Input
          value={form?.instagram}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                instagram: e.target.value,
              };
            })
          }
          placeholder="Instagram Account"
          type="text"
          id="instagramAccount"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="whatsapp">
          WhatsApp Number <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <InputNumber
          value={form?.whatsapp}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                whatsapp: e.target.value,
              };
            })
          }
          placeholder="Enter your Whatsapp Number"
          type="number"
          id="whatsapp"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="email">
          Email Address <span className="text-[#DC7C76]">&#42;</span>
        </Label>
        <Input
          value={form?.email}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
          placeholder="Enter your email address"
          type="email"
          id="email"
        />
      </InputForm>
    </>
  );
}
