import Button from "../atoms/Button";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="container flex justify-between">
        <div>ロゴ</div>
        <div className="flex justify-between w-1/4 ">
          <Button>ログイン</Button>
          <Button>新規登録</Button>
        </div>
      </div>
    </div>
  );
}
