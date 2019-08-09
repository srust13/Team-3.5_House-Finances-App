import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:nyf_mobile/components/user_icon.dart';
import 'package:nyf_mobile/data/user.dart';

class ProfileBanner extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _buildProfileBanner();
  }

  Widget _buildProfileBanner() {
    return Center(
      child: Column(
        children: <Widget>[
          Padding(
              padding: EdgeInsets.all(32),
              child: UserIcon(width: 100, height: 125, user: sampleUsers[0])),
        ],
      ),
    );
  }
}
