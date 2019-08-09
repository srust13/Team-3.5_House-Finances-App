import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

import 'package:flutter/material.dart';

class MyThemes {
  static final ThemeData lightTheme = ThemeData(
    primaryColor: Colors.blueGrey,
    brightness: Brightness.light,
  );

  static final ThemeData darkTheme = ThemeData(
    primaryColor: Colors.blueGrey,
    brightness: Brightness.dark,
  );
}

class DarkMode extends StatefulWidget {
  DarkMode({Key key}) : super(key: key);

  @override
  _DarkModeState createState() => _DarkModeState();
}

class _DarkModeState extends State<DarkMode> {
  bool isDarkMode = false;

  @override
  Widget build(BuildContext context) {
    return Switch(
      value: isDarkMode,
      onChanged: (value) {
        setState(() {
          isDarkMode = value;
        });
      },
    );
  }
}
