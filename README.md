# LD50
Construct3 team project for Ludum Dare 50

## iOS Build checklist

- Export project as xcode proj
- Open xcworkspace
- Replace "AppIcons" insude Images.xcassets
- In Target Settings, General:
    - Set Display Name "Battery Low"
    - Set Versions to x.y.z format (instead of x.y.z.w)
- In Target Settings, Signing:
    - Uncheck and recheck "Automatically manage signing"
- Select "Any iOS Device", Product -> Archive, Upload