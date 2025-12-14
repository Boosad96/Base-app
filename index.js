export default async function handler(req, res) {
  const body = req.body || {};
  const buttonIndex = body.untrustedData?.buttonIndex;

  // Button 1 → Open Nayner
  if (buttonIndex === 1) {
    return res.json({
      frame: {
        image: "https://placehold.co/600x400/png?text=Check+Nayner+Score",
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

  // Button 2 → Tip Creator (YOU)
  if (buttonIndex === 2) {
    return res.json({
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

  // Default screen
  res.json({
    frame: {
      image: "https://placehold.co/600x400/png?text=Nayner+Score+Checker",
      buttons: [
        { label: "Check Nayner Score" },
        { label: "Tip Creator ❤️" }
      ]
    }
  });
}
