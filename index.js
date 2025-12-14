export default async function handler(req, res) {
  const buttonIndex = req.body?.untrustedData?.buttonIndex;

  if (buttonIndex === 1) {
    return res.status(200).json({
      frame: {
        image: "https://placehold.co/600x400/png?text=Search+on+Nayner",
        buttons: [
          {
            label: "Open Nayner",
            action: "link",
            target: "https://nayner.xyz"
          }
        ]
      }
    });
  }

  if (buttonIndex === 2) {
    return res.status(200).json({
      frame: {
        image: "https://placehold.co/600x400/png?text=Tip+the+Creator+❤️",
        buttons: [
          {
            label: "Send Tip (Base)",
            action: "tx",
            target: "ethereum:0x177beed8deb6cac1c31b29660c4f2d984dd04caa"
          }
        ]
      }
    });
  }

  res.status(200).json({
    frame: {
      image: "https://placehold.co/600x400/png?text=Nayner+Score+Checker",
      buttons: [
        { label: "Check Nayner Score" },
        { label: "Tip Creator ❤️" }
      ]
    }
  });
}
