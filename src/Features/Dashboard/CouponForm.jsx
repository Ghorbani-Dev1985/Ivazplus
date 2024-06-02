import Loading from "@/UI/Loading";
import TextField from "@/UI/TextField";
import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Controller } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

const CouponForm = ({
  handler,
  isPending,
  products,
  register,
  errors,
  handleSubmit,
  control,
  getCategory,
}) => {
  return (
    <form
      onSubmit={handleSubmit(handler)}
      className="w-full md:max-w-screen-md space-y-5"
    >
      <TextField
        label=" کد تخفیف"
        name="code"
        required
        ltr
        register={register}
        validationSchema={{
          required: "لطفا کدتخفیف را وارد نمایید",
          minLength: {
            value: 3,
            message: "حداقل ۳ کاراکتر وارد نمایید  ",
          },
          maxLength: {
            value: 50,
            message: "حداکثر ۵۰ کاراکتر وارد نمایید",
          },
        }}
        errors={errors}
        placeholder=" لطفا کدتخفیف را وارد نمایید"
      />
      <TextField
        label="مقدار"
        type="number"
        name="amount"
        required
        register={register}
        validationSchema={{
          required: "لطفا مقدار را وارد نمایید",
          min: {
            value: 1,
            message: "لطفا حداقل مقدار ۱ را وارد نمایید",
          },
        }}
        errors={errors}
        ltr
        placeholder=" لطفا مقدار را وارد نمایید"
      />
      <TextField
        label=" تعداد استفاده "
        type="number"
        name="usageLimit"
        ltr
        required
        register={register}
        validationSchema={{
          required: "لطفا تعداد استفاده را وارد نمایید",
          min: {
            value: 1,
            message: "حداقل ۱ بار را وارد نمایید  ",
          },
        }}
        errors={errors}
        placeholder=" لطفا تعداد استفاده را وارد نمایید"
      />
      <Controller
        control={control}
        name="type"
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <RadioGroup
              {...field}
              ref={(ref) => {
                if (ref && !ref.focus) ref.focus = () => {};
              }}
              label=" نوع"
              orientation="horizontal"            
              color="primary"
            >
              <Radio value="fixedProduct">
                <span className="mr-1">قیمت ثابت </span>
              </Radio>
              <Radio value="percent">
                <span className="mr-1">درصد</span>
              </Radio>
            </RadioGroup>
          );
        }}
      />
       {errors.type && (
        <span className="block text-right text-rose-500 my-3 text-base">
          لطفا نوع را انتخاب نمایید
        </span>
      )}
      <Controller
        control={control}
        name="productIds"
        rules={{
          required: true,
        }}
        render={({ field }) => {
          return (
            <Select
              {...field}
              ref={(ref) => {
                if (ref && !ref.focus) ref.focus = () => {};
              }}
              color="default"
              label="محصولات"
              isMultiline={true}
              selectionMode="multiple"
              placeholder={
                getCategory ? getCategory : "محصول را انتخاب نمایید"
              }
            >
              {products?.map(({ _id, title }) => {
                return (
                  <SelectItem key={_id} value={_id} className="py-3">
                    {title}
                  </SelectItem>
                );
              })}
            </Select>
          );
        }}
      />
      {errors.productIds && (
        <span className="block text-right text-rose-500 my-3 text-base">
          لطفا یک محصول را انتخاب نمایید
        </span>
      )}
      <Controller
        control={control}
        name="expireDate"
        rules={{
          required: "لطفا تاریخ انقضا را انتخاب نمایید",
        }}
        render={({ field }) => {
          return (
            <DatePicker
              {...field}
              monthYearSeparator="|"
              format="YYYY/MM/DD"
              formattingIgnoreList={["Date", "Time"]}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-center"
              inputClass="textField-input dir-ltr"
            />
          );
        }}
      />
      {errors.expireDate && (
        <span className="block text-right text-rose-500 my-3 text-base">
          لطفا تاریخ انقضا را انتخاب نمایید
        </span>
      )}
      {isPending ? (
        <Loading />
      ) : (
        <Button
          type="submit"
          color="primary"
          className="w-full hover:bg-secondary hover:opacity-100 rounded-lg py-6"
        >
          تایید
        </Button>
      )}
    </form>
  );
};

export default CouponForm;
