import { View, Text, TextInput, Pressable, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";
import useFetch from "../../services/hooks/useFetch";
import getUniqueID from "../../utils/generateId";
const SalaryForm = ({ refetch }) => {
  const uniqueID = getUniqueID();
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  const [disabled, setDisabled] = useState(false);

  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [company, setCompany] = useState("");
  const [office, setOffice] = useState("");
  const [level, setLevel] = useState("");
  const [technology, setTechnology] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const {
    data: dataPost,
    error: errorPost,
    loading: loadingPost,
    setBody,
    setUrl,
  } = useFetch(null, "POST", null);
  const SavePressHandler = async () => {
    setUrl("https://brut.azurewebsites.net/api/v1/Salary");
    setBody({
      normalId: uniqueID,
      position: position,
      experience: experience,
      netSalary: salary,
      otherBenefits: benefits,
      location: location,
      sector: sector,
      company: company,
      office: office,
      technology: technology,
      level: level,
      employeeCount: employeeCount,
      currency: "₺",
    });
  };
  useEffect(() => {
    if (dataPost) {
      refetch(
        `https://brut.azurewebsites.net/api/v1/Salary/all?pageNumber=1&pageSize=10`
      );
      setDisabled("");
      setPosition("");
      setExperience("");
      setSalary("");
      setBenefits("");
      setLocation("");
      setSector("");
      setCompany("");
      setOffice("");
    }
  }, [dataPost]);

  //#region picker options
  const experienceOptions = [
    { label: "Deneyim", value: "" },
    { label: "0-1 Yıl", value: "0" },
    { label: "1-3 Yıl", value: "1" },
    { label: "4-6 Yıl", value: "4" },
    { label: "7-9 Yıl", value: "7" },
    { label: "10+ Yıl", value: "10" },
  ];
  const levelOptions = [
    { label: "Seviye", value: "" },
    { label: "Junior", value: "Junior" },
    { label: "Mid", value: "Mid" },
    { label: "Senior", value: "Senior" },
  ];
  const officeOptions = [
    { label: "Çalışma Şekli", value: "" },
    { label: "Remote", value: "Remote" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Ofis", value: "Ofis" },
  ];
  const employeeCountOptions = [
    { label: "Şirket Çalışan Sayısı", value: "" },
    { label: "0-10", value: "0-10" },
    { label: "10-30", value: "10-30" },
    { label: "30-100", value: "30-100" },
    { label: "100-300", value: "100-300" },
    { label: "300-1000", value: "300-1000" },
    { label: "1000-5000", value: "1000-5000" },
    { label: "5000+", value: "5000+" },
  ];
  //#endregion

  //#region positions
  const positions = [
    //name key is must.It is to show the text in front
    { id: 1, name: "AI Research Engineer" },
    { id: 2, name: "Analist" },
    { id: 3, name: "Android Developer" },
    { id: 4, name: "Backend Developer" },
    { id: 5, name: "Big Data Engineer" },
    { id: 6, name: "Business Intelligence Specialist" },
    { id: 7, name: "Data Analyst" },
    { id: 8, name: "Data Engineer" },
    { id: 9, name: "Data Scientist" },
    { id: 10, name: "Data Services Engineer" },
    { id: 11, name: "DevOps Engineer" },
    { id: 12, name: "Embedded Software Engineer" },
    { id: 13, name: "Frontend Developer" },
    { id: 14, name: "Fullstack Developer" },
    { id: 15, name: "Game Developer" },
    { id: 16, name: "IT Recruiter " },
    { id: 17, name: "Intern" },
    { id: 18, name: "iOS Developer" },
    { id: 19, name: "Machine Learning Engineer" },
    { id: 20, name: "Mechanical Engineer" },
    { id: 21, name: "Marketing" },
    { id: 22, name: "Mobile Developer" },
    { id: 23, name: "Network Specialist" },
    { id: 24, name: "Network Engineer" },
    { id: 25, name: "Pentester" },
    { id: 26, name: "Product Manager" },
    { id: 27, name: "Product Lead" },
    { id: 28, name: "Project Manager" },
    { id: 29, name: "QA Engineer" },
    { id: 30, name: "QA/Test Automation Engineer" },
    { id: 31, name: "Red Team Engineer" },
    { id: 32, name: "SAP System Specialist" },
    { id: 33, name: "Cyber Security" },
    { id: 34, name: "Software Engineer" },
    { id: 35, name: "Automation Engineer" },
    { id: 36, name: "Product Designer" },
    { id: 37, name: "Team Lead" },
    { id: 38, name: "Tester" },
    { id: 39, name: "UI/UX Designer" },
    { id: 40, name: "Data Warehouse Specialist" },
    { id: 41, name: "Yönetici / Müdür" },
  ];

  //#endregion
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Maaş bilgisi paylaş</Text>
      <View
        style={
          screenWidth > 994 ? styles.inputContainer : styles.smallInputContainer
        }
      >
        <View style={screenWidth > 994 ? { width: "100%" } : { width: "45%" }}>
          <TextInput
            style={styles.input}
            placeholder="Pozisyon"
            onChangeText={(text) => setPosition(text)}
            value={position}
            maxLength={40}
          />
          <Picker
            mode="dropdown"
            dropdownIconColor={COLORS.BLACK}
            selectedValue={experience}
            style={styles.input}
            onValueChange={(itemValue) => setExperience(itemValue)}
          >
            {experienceOptions.map((option) => (
              <Picker.Item
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ))}
          </Picker>
          <Picker
            mode="dropdown"
            dropdownIconColor={"black"}
            selectedValue={level}
            style={styles.input}
            onValueChange={(itemValue) => setLevel(itemValue)}
          >
            {levelOptions.map((option) => (
              <Picker.Item
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Aylık net maaş (₺)"
            maxLength={7}
            onChangeText={(text) => setSalary(text)}
            value={salary.replace(/[^0-9]/g, "")}
          />
        </View>
        <View
          style={
            screenWidth > 994
              ? {
                  width: "100%",
                }
              : { width: "45%" }
          }
        >
          <TextInput
            style={styles.input}
            placeholder="Yan haklar"
            onChangeText={(text) => setBenefits(text)}
            value={benefits}
            maxLength={30}
          />
          <TextInput
            style={styles.input}
            placeholder="Lokasyon (İl)"
            onChangeText={(text) => setLocation(text)}
            value={location}
            maxLength={30}
          />
          <Picker
            mode="dropdown"
            dropdownIconColor={"black"}
            selectedValue={employeeCount}
            style={styles.input}
            itemStyle={{ height: 132 }}
            onValueChange={(itemValue, itemIndex) =>
              setEmployeeCount(itemValue)
            }
          >
            {employeeCountOptions.map((option) => (
              <Picker.Item
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Kullandığın teknolojiler"
            onChangeText={(text) => setTechnology(text)}
            value={technology}
            maxLength={40}
          />
          <Picker
            mode="dropdown"
            dropdownIconColor={"black"}
            selectedValue={office}
            style={styles.input}
            itemStyle={{ height: 132 }}
            onValueChange={(itemValue, itemIndex) => setOffice(itemValue)}
          >
            {officeOptions.map((option) => (
              <Picker.Item
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.actionButton}>
        <Pressable
          accessibilityRole="button"
          disabled={disabled}
          onKeyDown={(e) => {
            console.log(e.key);
          }}
          onPress={() => SavePressHandler()}
          style={(state) => [styles.pressable, disabled && styles.disabled]}
        >
          <Text style={{ color: "white" }}>Gönder</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SalaryForm;
